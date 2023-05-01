const {NodeSSH} = require('node-ssh');
const path = require("path");
const ssh = new NodeSSH();

const distPath = path.resolve(__dirname, `./target/${process.env.NAME}`);

(function () {
    ssh.connect({
        host: '114.116.0.178',
        username: 'root',
        port: '22',
        password: '***'
    }).then(function () {
        const failed = [];
        const successful = [];
        console.log('正在上传...')
        ssh.putDirectory(
            `${distPath}`,
            `/var/www/html/${process.env.NAME}`,
            {
                recursive: true,
                concurrency: 10,
                validate: function (itemPath) {
                    const baseName = path.basename(itemPath);
                    return (
                        baseName.substr(0, 1) !== '.' && // do not allow dot files
                        baseName !== 'node_modules'
                    ); // do not allow node_modules
                },
                tick: function (localPath, remotePath, error) {
                    if (error) {
                        failed.push(localPath);
                        console.log('\x1B[31m%s\x1B[0m', localPath);
                    } else {
                        successful.push(localPath);
                        console.log('\x1B[32m%s\x1B[0m', localPath);
                    }
                },
            }
        ).then(status => {
            if (status) {
                console.log(status, '上传成功!')
                ssh.execCommand('sh reload.sh', {cwd: '/root/shell'}).then(res => {
                    if(res?.code==0){
                        console.log('脚本执行成功，nginx重启')
                    }else{
                        console.log('脚本执行失败')
                    }
                    process.exit(0)
                })
                // process.exit(0)
            } else {
                console.log(status, '上传失败!!!')
                process.exit(0)
            }
        }).catch(e => {
            console.log('e', e)
            process.exit(0)
        })
    })
})()

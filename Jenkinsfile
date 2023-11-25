library 'jenkins-telegram-notification'
library 'jenkins-pipeline'

node('pipeline') {
    withEnv(["NODE_HOME=${tool 'node18'}", "PATH+NODE_BIN=${tool 'node18'}/bin"]) {
        uxPipeline(this)
    }
}

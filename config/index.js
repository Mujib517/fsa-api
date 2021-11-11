module.exports = {
    local: {
        dbHost: 'mongodb://localhost:27017/fsa'
    },
    dev: {},
    stage: {},
    qa: {},
    production: {
        dbHost: 'mongodb+srv://admin:admin@cluster0.qcdda.mongodb.net/fsa'
    }
}
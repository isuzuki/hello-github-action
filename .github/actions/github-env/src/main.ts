import * as core from '@actions/core'

console.log(process.env)
core.setOutput('ref', process.env.GITHUB_REF!)
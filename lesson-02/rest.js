// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: 'MY_TOKEN' // thay = token của chính mình trong máy riêng, không đăng lên 
})

await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
  owner: 'CongHuanPTIT',
  repo: 'api-testing-better-bytes',
  issue_number: '1',
  body: 'Filled',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
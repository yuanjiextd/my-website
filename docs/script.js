// 配置
const owner = 'yuanjiextd';
const repo = 'my-website';

// 获取所有 Issues（文章）
async function getPosts() {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues?labels=post&state=open`);
    const issues = await response.json();
    return issues;
}

// 获取单篇文章
async function getPost(postNumber) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${postNumber}`);
    const issue = await response.json();
    console.info(issue)
    return issue;
}

// 将 Markdown 转成 HTML（需要 marked.js 库）
function renderMarkdown(markdown) {
    // 使用 marked 库转换
    return marked.parse(markdown);
}
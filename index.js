import express from "express" 
import 'dotenv/config'
const app = express()
const port =  process.env.PORT || 3000;
const data = {
  "login": "RyanxGit",
  "id": 145177444,
  "node_id": "U_kgDOCKc7ZA",
  "avatar_url": "https://avatars.githubusercontent.com/u/145177444?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RyanxGit",
  "html_url": "https://github.com/RyanxGit",
  "followers_url": "https://api.github.com/users/RyanxGit/followers",
  "following_url": "https://api.github.com/users/RyanxGit/following{/other_user}",
  "gists_url": "https://api.github.com/users/RyanxGit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RyanxGit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RyanxGit/subscriptions",
  "organizations_url": "https://api.github.com/users/RyanxGit/orgs",
  "repos_url": "https://api.github.com/users/RyanxGit/repos",
  "events_url": "https://api.github.com/users/RyanxGit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RyanxGit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ryan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-09-16T03:23:30Z",
  "updated_at": "2024-06-05T15:47:39Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//sending json 
app.get('/github',(req,res)=> {
  res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
import { SET_REPOS } from '../types/githubTypes'

import fetch from 'node-fetch'

//async dispatch
export const fetchRepos = () => (
    async (dispatch) => {
        //getting my newest 5 repos and setting them in the reducer
        let repos = await (
            await fetch("https://api.github.com/users/5haw4/repos?per_page=5&sort=created:asc")
        ).json();
        //passing to the reducer only the needed data
        repos = repos.map(item => ({ 
            name: item.full_name,
            url: item.html_url,
            desc: item.description,
        }))
        dispatch({ type: SET_REPOS, repos })
    }
)
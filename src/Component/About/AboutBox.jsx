import React, { useState } from 'react'

const AboutBox = () => {
    const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const [numberRepo , setNumberRepo] = useState('-');
    const [commitsCount , setCommitsCount] = useState('-');
    const [followersCount , setFollowersCount] = useState('-');


    fetch(`https://api.github.com/users/${username}`, {
    headers: {
        Authorization: `token ${accessToken}`,
    },
    })
  .then(response => response.json())
  .then(data => {
    if (data.public_repos !== undefined) {
      setNumberRepo(data.public_repos);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //star
  const headers = {
    'Authorization': `token ${accessToken}`,
  };
  
  fetch(`https://api.github.com/users/${username}/repos`, { headers })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch repositories');
    }
  })
  .then(repos => {
    if (!Array.isArray(repos)) {
      throw new Error('Repos is not an array');
    }
    let commitCount = 0;

    const fetchCommits = (repo) => {
      return fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`, { headers })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch commits for repo ' + repo.name);
          }
        })
        .then(commits => {
          commitCount += commits.length;
        });
    };

    const fetchAllCommits = async () => {
      for (const repo of repos) {
        await fetchCommits(repo);
      }
      setCommitsCount(commitCount);
    };

    fetchAllCommits();
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Rest of your code to fetch followers count


    //fetch github followers count
    fetch(`https://api.github.com/users/${username}`, { method: 'GET', headers })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('获取用户信息时发生错误');
      }
    })
    .then((userData) => {
      setFollowersCount(userData.followers);      
    })
    .catch((error) => {
      console.error(error);
    });

// 创建一个表示目前日期的Date对象
var currentDate = new Date();

// 创建一个表示2023年9月的Date对象
var targetDate = new Date(2022, 8); // 月份是从0开始计数，所以8代表9月

// 计算年份差
var yearsDiff = currentDate.getFullYear() - targetDate.getFullYear();

// 计算月份差，需要将年份差转换为月份
var monthsDiff = (yearsDiff * 12 + currentDate.getMonth() - targetDate.getMonth());

  return (
    <>
    <div className="about__boxes grid">
        <div className="about__box">
            <i className='about__icon icon-drawer'></i>
            <div>
                <h3 className='about__title'>{numberRepo}</h3>
                <span className="about__subtitle">Github Repositories</span>
            </div>
        </div>
        <div className="about__box">
            <i className='about__icon icon-clock'></i>
            <div>
                <h3 className='about__title'>{commitsCount}</h3>
                <span className="about__subtitle">Commits</span>
            </div>
        </div>
        <div className="about__box">
            <i className='about__icon icon-people'></i>
            <div>
                <h3 className='about__title'>{followersCount}</h3>
                <span className="about__subtitle">Github Followers</span>
            </div>
        </div>
        <div className="about__box">
            <i className='about__icon icon-graph'></i>
            <div>
                <h3 className='about__title'>{monthsDiff} Months</h3>
                <span className="about__subtitle">Coding Experience</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutBox
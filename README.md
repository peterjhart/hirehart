# hirehart

Personal website for finding a new developer position.

View the website here: [hirehart.com](https://hirehart.com)

To run this container:

```zsh
docker build -t hirehart:latest .
docker run -d -p 80:3000 --name=hirehart hirehart:latest
```

Then visit http://localhost

To stop the container:

```zsh
docker stop hirehart
```
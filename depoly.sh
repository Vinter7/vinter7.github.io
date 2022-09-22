set -e
yarn docs:build
cd dist
echo 'linhua.co' > CNAME
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:Vinter7/vinter7.github.io.git master:master

cd ..
cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m 'update book'
git push -f git@github.com:khanhduy1407/kdujs-templates-webpack.git master:gh-pages

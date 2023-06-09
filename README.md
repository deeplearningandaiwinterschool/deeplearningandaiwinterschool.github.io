# Deep Learning and AI Winter/Summer School

## Setup
1. Jekyll installation on your local computer, please follow [Jekyll installation guide](https://jekyllrb.com/docs/)
2. Clone the repository
3. Run
    ```
    $: bundle install
    $: bundle exec jekyll build
    $: bundle exec jekyll serve --watch     // Jekyll runs on port 4000. If you want to run on other port, add -P [port_number]
    ```

## Structure
### Data
If you want to add or edit `data` for the website, go to `_data` folder and find the file for a particular year of DLAI.

### Past events
Once you want to create a new page for the latest event, you may follow the following steps:
1. move the current one, `/index.html` to `_past/` folder and change the file name to `dlai[no.].html`
2. create a new `/index.html`
3. update `_include/past-events.html` with a link to the one you just moved

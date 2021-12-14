### When triggered in pull request, allows to get PR data: url, title

## Outputs
`title`
`url`

## Example Workflow

```yml
- name: get PR data
  id: pr-data
  uses: velas/get-pull-request-data@master

- name: use PR data
  run: echo ${{ steps.pr-data.outputs.title }}
```

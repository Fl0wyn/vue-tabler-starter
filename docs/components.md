## Card
```js
<Card col="col-lg-4" title="Hello" padding="card-md" :status="{ direction: 'top', color: 'success' }" >
 ...
</Card>
```
| Parameter          | Type                                    | Default   |
| :----------------- | :-------------------------------------- | :-------- |
| `col`              | `String`                                | `col-12`  |
| `title`            | `String`                                | undefined |
| `padding`          | `'card-md' \| 'card-lg'`                | undefined |
| `status.direction` | `'top' \| 'bottom' \| 'start' \| 'end'` | undefined |
| `status.color`     | `String`                                | undefined |

---

## Table
```js
const thead = [
  {os: 'Windows'},
  {os: 'Linux', colspan: 2}
]

<Table col="col-lg-4" title="Hello" :thead="thead" :status="{ direction: 'top', color: 'success' }" >
  <tr>
    <td>0</td>
    <td>1</td>
  </tr>
</Table>
```
| Parameter | Type     | Default   |
| :-------- | :------- | :-------- |
| `col`     | `String` | `col-12`  |
| `title`   | `String` | undefined |
| `thead`   | `Array`  | undefined |
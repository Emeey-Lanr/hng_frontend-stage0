## HNG FRONTEND TASK 0
A profile card Component

### To Run Locally

```bash
git clone https://github.com/Emeey-Lanr/hng_frontend-stage0.git
```

``` bash
cd hng_frontend-stage0 
```

### Test

```js

const test = () => {
    let ids = [
      "test-profile-card",
      "test-user-name",
      "test-user-bio",
      "test-user-time",
      "test-user-social-links",
      "test-user-social-github",
      "test-user-social-linkedlin",
      "test-user-social-x",
      "test-user-hobbies",
      "test-user-dislikes",
    ];
  
    for (let i = 0; i < ids.length; i++){

        const element = document.querySelector(`[data-testid="${ids[i]}"]`)
     
        if (element) {
            console.log(`found`, ids[i])
        } else {
            console.error("Not found", ids[i])
        }
    }

}

test()
```
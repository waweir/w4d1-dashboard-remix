// 1. Count the number of records in the "Current Quarter Details" table.
    console.log('Number of records in the "Current Quarter Details" table: ' + (document.querySelectorAll('tbody tr')).length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
    var images = document.querySelectorAll('.placeholders img')
    images[0].setAttribute('src', 'img/winter.jpeg')
    images[0].setAttribute('alt', 'deer in snow')
    images[1].setAttribute('src', 'img/spring.jpeg')
    images[1].setAttribute('alt', 'flowers')
    images[2].setAttribute('src', 'img/summer.jpeg')
    images[2].setAttribute('alt', 'sunset over water')
    images[3].setAttribute('src', 'img/fall.jpeg')
    images[3].setAttribute('alt', 'leaves on the ground')

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
    var threeDots = Array.from(document.getElementsByClassName('text-muted'))
    threeDots.forEach(function(item) {
        item.innerHTML = ('$' + Math.round((Math.random() * 1000))+ '.00')
    })

// 4. Change the currently selected left side menu item from Overview to Reports.
    var navItems = document.querySelectorAll('.nav-sidebar li')
    navItems[0].classList.remove('active')
    navItems[1].classList.add('active')

// 5. Set the default search input value to "Q4 sales".
    document.querySelector('input').value = 'Q4 Sales'

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
    var table = document.querySelector('table').classList.add('table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
    var tableRows = Array.from(document.querySelectorAll('tbody tr'))
    tableRows.forEach(function(row, i) {
        if (i >= 6 && i <= 9) {
            row.classList.add('success')
        }
    })


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
    var tableHeader = document.querySelectorAll('thead tr th')
    tableHeader[0].innerHTML = 'ID'
    tableHeader[1].innerHTML = 'First Name'
    tableHeader[2].innerHTML = 'Last Name'
    tableHeader[3].innerHTML = 'Department'
    tableHeader[4].innerHTML = 'Client'

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]



// 10. Make each word in the table capitalized.
    var words = Array.from(document.querySelectorAll('td'))
    words.forEach(function(word) {
        word.classList.add('capitalize')
    })

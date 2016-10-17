// 1. Count the number of records in the "Current Quarter Details" table.
    console.log('Number of records in the "Current Quarter Details" table: ' + (document.getElementsByTagName('tr')).length)


// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
    var winterImage = document.getElementById('winter')
    winterImage.setAttribute('src', 'img/winter.jpeg')
    winterImage.setAttribute('alt', 'deer in snow')

    var springImage = document.getElementById('spring')
    springImage.setAttribute('src', 'img/spring.jpeg')
    springImage.setAttribute('alt', 'flowers')

    var summerImage = document.getElementById('summer')
    summerImage.setAttribute('src', 'img/summer.jpeg')
    summerImage.setAttribute('alt', 'sunset over water')

    var fallImage = document.getElementById('fall')
    fallImage.setAttribute('src', 'img/fall.jpeg')
    fallImage.setAttribute('alt', 'leaves on the ground')

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.
    var threeDots = Array.from(document.getElementsByClassName('text-muted'))
    threeDots.forEach(function(item) {
        item.innerHTML = ('$' + Math.round((Math.random(0,1) * 10000))/100)
    })

// 4. Change the currently selected left side menu item from Overview to Reports.
    var navItems = document.querySelector('.nav-sidebar').childNodes
    navItems[1].classList.remove('active')
    navItems[3].classList.add('active')

// 5. Set the default search input value to "Q4 sales".
    var search = Array.from(document.getElementsByTagName('input'))
    console.log(search)
    search.forEach(function(item) {
        item.setAttribute('placeholder', 'Q4 Sales')
    })

// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
    var table = document.getElementById('table')
    table.classList.add('table-hover')

// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
    var tableRows = Array.from(document.getElementsByTagName('tr'))
    tableRows.forEach(function(row, i) {
        if((i > 6) && (i < 11)) {
            row.classList.add('success')
        }
    })

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
    var tableHeader = document.getElementById('table_header').childNodes
    tableHeader[1].innerHTML = 'ID'
    tableHeader[3].innerHTML = 'First Name'
    tableHeader[5].innerHTML = 'Last Name'
    tableHeader[7].innerHTML = 'Department'
    tableHeader[9].innerHTML = 'Client'


// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]



// 10. Make each word in the table capitalized.
    var words = Array.from(document.getElementsByTagName('td'))
    words.forEach(function(word) {
        word.classList.add('capitalize')
    })

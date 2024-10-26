var datavalue1;
var datavalue2;

/* --------- Pickup  Location AutoComplete Start--------- */
function addressAutocomplete1(containerElement, callback, options) {
    var inputElement = document.getElementById("pickuplocation")
    var currentItems;
    var currentPromiseReject;
    var focusedItemIndex;
    inputElement.addEventListener("input", function (e) {
        var currentValue = this.value;
        closeDropDownList();
        if (currentPromiseReject) {
            currentPromiseReject(
                {
                    canceled: true
                }
            );
        }
        var promise = new Promise((resolve, reject) => {
            currentPromiseReject = reject;
            var apiKey = "8cf33d549d294361aa9174301d56a254";
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&apiKey=${apiKey}`;
            if (options.type) {
                url += `&type=${options.type}`;
            }
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        response.json().then(data => resolve(data));
                    } else {
                        response.json().then(data => reject(data));
                    }
                });
        });
        promise.then((data) => {
            currentItems = data.features;
            var autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");
            containerElement.appendChild(autocompleteItemsElement);
            data.features.forEach((feature, index) => {
                var itemElement = document.createElement("DIV");
                itemElement.innerHTML = feature.properties.formatted;
                itemElement.addEventListener("click", function (e) {
                    inputElement.value = currentItems[index].properties.formatted;
                    callback(currentItems[index]);
                    closeDropDownList();
                });
                autocompleteItemsElement.appendChild(itemElement);
            });
        }, (err) => {
            if (!err.canceled) {
                console.log(err);
            }
        });
    });
    inputElement.addEventListener("input", function (e) {
        var currentValue = this.value;
        closeDropDownList();
        if (currentPromiseReject) {
            currentPromiseReject({
                canceled: true
            });
        }
        var promise = new Promise((resolve, reject) => {
            currentPromiseReject = reject;
            var apiKey = "8cf33d549d294361aa9174301d56a254";
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&apiKey=${apiKey}`;
            if (options.type) {
                url += `&type=${options.type}`;
            }
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        response.json().then(data => resolve(data));
                    } else {
                        response.json().then(data => reject(data));
                    }
                });
        });
        promise.then((data) => {
            currentItems = data.features;
            var autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");
            containerElement.appendChild(autocompleteItemsElement);
            data.features.forEach((feature, index) => {
                var itemElement = document.createElement("DIV");
                itemElement.innerHTML = feature.properties.formatted;
                itemElement.addEventListener("click", function (e) {
                    inputElement.value = currentItems[index].properties.formatted;
                    callback(currentItems[index]);
                    closeDropDownList();
                });
                autocompleteItemsElement.appendChild(itemElement);
            });
        }, (err) => {
            if (!err.canceled) {
                console.log(err);
            }
        });
    });
    inputElement.addEventListener("keydown", function (e) {
        var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            var itemElements = autocompleteItemsElement.getElementsByTagName("div");
            if (e.keyCode == 40) {
                e.preventDefault();
                focusedItemIndex = focusedItemIndex !== itemElements.length - 1 ? focusedItemIndex + 1 : 0;
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 38) {
                e.preventDefault();

                focusedItemIndex = focusedItemIndex !== 0 ? focusedItemIndex - 1 : focusedItemIndex = (itemElements.length - 1);
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (focusedItemIndex > -1) {
                    closeDropDownList();
                }
            }
        } else {
            if (e.keyCode == 40) {
                var event = document.createEvent('Event');
                event.initEvent('input', true, true);
                inputElement.dispatchEvent(event);
            }
        }
    });

    function setActive(items, index) {
        if (!items || !items.length) 
            return false;

        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }

        items[index].classList.add("autocomplete-active");
        inputElement.value = currentItems[index].properties.formatted;
        callback(currentItems[index]);
    }

    function closeDropDownList() {
        var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            containerElement.removeChild(autocompleteItemsElement);
        }

        focusedItemIndex = -1;
    }

    function addIcon(buttonElement) {
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svgElement.setAttribute('viewBox', "0 0 24 24");
        svgElement.setAttribute('height', "24");

        var iconElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        iconElement.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
        iconElement.setAttribute('fill', 'currentColor');
        svgElement.appendChild(iconElement);
        buttonElement.appendChild(svgElement);
    }

    document.addEventListener("click", function (e) {
        if (e.target !== inputElement) {
            closeDropDownList();
        } else if (!containerElement.querySelector(".autocomplete-items")) {
            var event = document.createEvent('Event');
            event.initEvent('input', true, true);
            inputElement.dispatchEvent(event);
        }
    });

}

addressAutocomplete1(document.getElementById("autocomplete-container-country"), (data) => {
    console.log("Selected country: ");
    console.log(data);

}, {
    placeholder: "Enter a country name here",
    type: "country"
});

addressAutocomplete1(document.getElementById("autocomplete-container-city"), (data) => {
    console.log("Selected city: ");
    datavalue1 = data;
    console.log(data);
}, {
    placeholder: "Enter a city name here"
});

/* --------- Pickup Location AutoComplete Start--------- */


/* --------- Drop Location AutoComplete Start--------- */
function addressAutocomplete2(containerElement, callback, options) {
    var inputElement = document.getElementById("droplocation")
    var currentItems;
    var currentPromiseReject;
    var focusedItemIndex;
    inputElement.addEventListener("input", function (e) {
        var currentValue = this.value;
        closeDropDownList();
        if (currentPromiseReject) {
            currentPromiseReject({
                canceled: true
            });
        }
        var promise = new Promise((resolve, reject) => {
            currentPromiseReject = reject;
            var apiKey = "8cf33d549d294361aa9174301d56a254";
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&apiKey=${apiKey}`;
            if (options.type) {
                url += `&type=${options.type}`;
            }
            fetch(url)
              .then(response => {
                  if (response.ok) {
                      response.json().then(data => resolve(data));
                  } else {
                      response.json().then(data => reject(data));
                  }
              });
        });       
        promise.then((data) => {
            currentItems = data.features;
            var autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");
            containerElement.appendChild(autocompleteItemsElement);
            data.features.forEach((feature, index) => {
              var itemElement = document.createElement("DIV");
              itemElement.innerHTML = feature.properties.formatted;
              itemElement.addEventListener("click", function (e) {
                  inputElement.value = currentItems[index].properties.formatted;
                  callback(currentItems[index]);
                  closeDropDownList();
              });
              autocompleteItemsElement.appendChild(itemElement);
            });
        }, (err) => {
            if (!err.canceled) {
                console.log(err);
            }
        });
    });
    inputElement.addEventListener("input", function (e) {
        var currentValue = this.value;
        closeDropDownList();
        if (currentPromiseReject) {
            currentPromiseReject({
                canceled: true
            });
        }
        var promise = new Promise((resolve, reject) => {
            currentPromiseReject = reject;
            var apiKey = "8cf33d549d294361aa9174301d56a254";
            var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(currentValue)}&limit=5&apiKey=${apiKey}`;
            if (options.type) {
                url += `&type=${options.type}`;
            }
            fetch(url)
              .then(response => {
                if (response.ok) {
                    response.json().then(data => resolve(data));
                } else {
                    response.json().then(data => reject(data));
                }
              });
        });
        promise.then((data) => {
            currentItems = data.features;
            var autocompleteItemsElement = document.createElement("div");
            autocompleteItemsElement.setAttribute("class", "autocomplete-items");
            containerElement.appendChild(autocompleteItemsElement);
            data.features.forEach((feature, index) => {
              var itemElement = document.createElement("DIV");
              itemElement.innerHTML = feature.properties.formatted;
              itemElement.addEventListener("click", function (e) {
                  inputElement.value = currentItems[index].properties.formatted;
                  callback(currentItems[index]);
                  closeDropDownList();
              });
              autocompleteItemsElement.appendChild(itemElement);
            });
        }, (err) => {
            if (!err.canceled) {
                console.log(err);
            }
        });
    });
    inputElement.addEventListener("keydown", function (e) {
        var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            var itemElements = autocompleteItemsElement.getElementsByTagName("div");
            if (e.keyCode == 40) {
                e.preventDefault();
                focusedItemIndex = focusedItemIndex !== itemElements.length - 1 ? focusedItemIndex + 1 : 0;
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 38) {
                e.preventDefault();

                focusedItemIndex = focusedItemIndex !== 0 ? focusedItemIndex - 1 : focusedItemIndex = (itemElements.length - 1);
                setActive(itemElements, focusedItemIndex);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (focusedItemIndex > -1) {
                    closeDropDownList();
                }
            }
        } else {
            if (e.keyCode == 40) {
                var event = document.createEvent('Event');
                event.initEvent('input', true, true);
                inputElement.dispatchEvent(event);
            }
        }
    });

    function setActive(items, index) {
        if (!items || !items.length) return false;

        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("autocomplete-active");
        }

        items[index].classList.add("autocomplete-active");
        inputElement.value = currentItems[index].properties.formatted;
        callback(currentItems[index]);
    }

    function closeDropDownList() {
        var autocompleteItemsElement = containerElement.querySelector(".autocomplete-items");
        if (autocompleteItemsElement) {
            containerElement.removeChild(autocompleteItemsElement);
        }
        focusedItemIndex = -1;
    }

    function addIcon(buttonElement) {
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
        svgElement.setAttribute('viewBox', "0 0 24 24");
        svgElement.setAttribute('height', "24");

        var iconElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        iconElement.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z");
        iconElement.setAttribute('fill', 'currentColor');
        svgElement.appendChild(iconElement);
        buttonElement.appendChild(svgElement);
    }

    document.addEventListener("click", function (e) {
        if (e.target !== inputElement) {
            closeDropDownList();
        } else if (!containerElement.querySelector(".autocomplete-items")) {
            var event = document.createEvent('Event');
            event.initEvent('input', true, true);
            inputElement.dispatchEvent(event);
        }
    });

}

addressAutocomplete2(document.getElementById("autocomplete-container-country-2"), (data) => {
    console.log("Selected country: ");
    console.log(data);
}, {
    placeholder: "Enter a country name here",
    type: "country"
});

addressAutocomplete2(document.getElementById("autocomplete-container-city-2"), (data) => {
    console.log("Selected city: ");
    datavalue2 = data;
    console.log(data);
}, {
    placeholder: "Enter a city name here"
});

/* --------- Drop Location AutoComplete End--------- */


/* -------- Calculate Distance / Hours Start ---------- */
async function getDistance() {
    console.log(datavalue1);
    console.log(datavalue2);

    var lat1 = "";
    var lat2 = "";
    var lon1 = "";
    var lon2 = "";

    if (datavalue1 == undefined) {
      console.log("Inside Datavalue1 undefined");
      let locationName = document.getElementById('pickuplocation').value;
      await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationName}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
               var latitude = data[0].lat;
               var longitude = data[0].lon;
               lat1 = parseFloat(latitude);
               console.log(lat1);
               lon1 = parseFloat(longitude);
               console.log(lon1);
            }
          })
        .catch(error => {
             console.error('Error:', error);
        });
    } else {
        lat1 = datavalue1.properties.lat;
        lon1 = datavalue1.properties.lon;
    }
    if (datavalue2 == undefined) {
        console.log("Inside Datavalue2 undefined");
        let locationName = document.getElementById('droplocation').value;
        await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationName}`)
            .then(response => response.json())
            .then(data => {
              if (data.length > 0) {
                var latitude = data[0].lat;
                var longitude = data[0].lon;
                lat2 = parseFloat(latitude);
                console.log(lat2);
                lon2 = parseFloat(longitude);
                console.log(lon2);
              }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        lat2 = datavalue2.properties.lat;
        lon2 = datavalue2.properties.lon;
    }

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    const startDate = new Date(`${document.getElementById('bookstartdate').value}T${document.getElementById('bookstarttime').value}`);
    const endDate = new Date(`${document.getElementById('bookenddate').value}T${document.getElementById('bookendtime').value}`);
    var totalHours = 0;
    if (!isNaN(startDate) && !isNaN(endDate)) {
        const timeDifference = Math.abs(endDate - startDate);
        totalHours = Math.floor(timeDifference / (1000 * 60 * 60)); // Hours

        const totalMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
        if (totalMinutes > 30) {
            totalHours = totalHours + 1;
        }
        document.getElementById('hours').textContent = totalHours;
    }

    console.log("Total Hours : " + totalHours);
    console.log("Distance : " + distance);
    document.getElementById('distance').textContent = (distance.toFixed(2)) + "KM";
    document.getElementById('amount').textContent = (parseInt(totalHours) * 18) + "₹";
}

const formdata = document.getElementById('form');
formdata.addEventListener('submit', getDistance);

/* -------- Calculate Distance / Hours End ---------- */
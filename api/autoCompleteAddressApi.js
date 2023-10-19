var datavalue1;
var datavalue2;

function addressAutocomplete1(containerElement, callback, options) {
    var inputElement = document.getElementById("pickuplocation")
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


function getDistance(){

    var lat1 = datavalue1.properties.lat;
    var lon1 = datavalue1.properties.lon;
    var lat2 = datavalue2.properties.lat;
    var lon2 = datavalue2.properties.lon;

    console.log(lat1);
    console.log(lon1);
    console.log(lat2);
    console.log(lon2);

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *   Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    console.log("Distance : "+distance);
    document.getElementById('distance').textContent = (distance.toFixed(2))+"KM";
    document.getElementById('amount').textContent = (((distance.toFixed(2))*18).toFixed())+"₹";
}

// asign the form to form variable
const formdata = document.getElementById('form');
// 
// call the submitForm() function when submitting the form
formdata.addEventListener('submit', getDistance);
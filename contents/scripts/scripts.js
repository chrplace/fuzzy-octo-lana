function refreshIt(element) {
                setTimeout(function() {
                    element.src = element.src.split('?')[0] + '?' + new Date().getTime();
                    refreshIt(element);
                }, 1000); // refresh every 50ms
            }

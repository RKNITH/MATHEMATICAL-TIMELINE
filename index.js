document.addEventListener('DOMContentLoaded', function () {
    fetch('timeline.json')
        .then(response => response.json())
        .then(data => {
            const timelineContainer = document.getElementById('timeline');
            data.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.classList.add('timeline-event');

                const eventTitle = document.createElement('h3');
                eventTitle.textContent = event.title;
                eventElement.appendChild(eventTitle);

                const eventDate = document.createElement('p');
                eventDate.textContent = `Date: ${event.date}`;
                eventElement.appendChild(eventDate);

                const eventDescription = document.createElement('p');
                eventDescription.textContent = event.description;
                eventElement.appendChild(eventDescription);

                timelineContainer.appendChild(eventElement);
            });
        });
});

var baseUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
var dashboardsEndpoint = baseUrl + "/Dashboards";

var dashboardInfosEndpoint = dashboardsEndpoint + "/GetThumbnailInfos";

function onSaveHandler(rv, args) {
    var eventArgs = args;
    var dbName = rv.dashboard.title;

    if (!args.isNew && !args.saveAs) {
        eventArgs.saveFinished();
        return;
    }

    if (args.saveAs) {
        var newName = prompt("Please enter name to save the dashboard as", "");
        if (newName != null) {
            checkIfNameIsAvailable(newName).then(isNameAvailable => {
                if (isNameAvailable) {
                    args.name = newName; // updates the title of the dashboard
                    args.dashboardId = newName; // update the dashboardId property as you would expect to land on the server-side
                    args.saveFinished();
                }
                else {
                    if (window.confirm("A dashboard with name:" + dbName + " already exists. Do you want to override it?")) {
                        eventArgs.serialize();
                        eventArgs.saveFinished();
                    }
                }
            });
            return;
        }
    }

    if (args.isNew) {
        checkIfNameIsAvailable(dbName).then(isNameAvailable => {
            if (isNameAvailable) {
                eventArgs.saveFinished();
            }
            else {
                if (window.confirm("A dashboard with name:" + dbName + " already exists. Do you want to override it?")) {
                    eventArgs.saveFinished();
                }
            }
        });
    }
};

async function checkIfNameIsAvailable(dashboardName) {

    const r = await fetch(dashboardsEndpoint);
    return await r.json().then(json => {
        return !json.includes(dashboardName);
    });
}

var onLinkedDashboardProviderAsyncHandler = (dashboardId => {
    return $.ig.RVDashboard.loadDashboardAsync(dashboardId);
})

var onDashboardSelectorRequestedHandler = (args) => {
    showTargetDashboardPicker(args.callback);
}

function showTargetDashboardPicker(callback) {
    dashboardSelectedCallback = callback;

    var container = document.querySelector("#dashboardSelectionOptions");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    fetch(dashboardInfosEndpoint).then(r => {
        r.json().then(json => {
            json.forEach(dashboardInfo => {
                renderThumbnail(container, dashboardInfo, dashboardSelectedCallback);
            });
        });
    }).then(() => {
        openModal();
    });
}

const escapeId = (str) => {
    return str.replaceAll(' ', '_').replaceAll('.', '_');
}

const renderThumbnail = (container, dbInfo, successCalback) => {
    const button = document.createElement("button");
    let currentId = dbInfo.id;
    button.addEventListener('click', (arg) => {
        successCalback(currentId);
        closeModal();
    });
    button.className = "Reveal-Thumbnail-Box";

    const thumbnailHeader = document.createElement("div");
    thumbnailHeader.className = "Reveal-Thumbnail-Header";
    thumbnailHeader.innerHTML = dbInfo.displayName;

    const thumbnailView = document.createElement("div");
    thumbnailView.className = "Reveal-Thumbnail-View";
    thumbnailView.id = escapeId("view_" + dbInfo.id);

    button.appendChild(thumbnailHeader);
    button.appendChild(thumbnailView);

    container.appendChild(button);

    const rvThumbView = new RevealApi.RevealDashboardThumbnailView("#" + thumbnailView.id);
    rvThumbView.dashboardInfo = dbInfo.info;
}

//Modal
var modal = document.getElementById("selectDashboardDialog");
var span = document.getElementsByClassName("close")[0];

function closeModal() {
    modal.style.display = "none";
}
function openModal() {
    modal.style.display = "block";
}

span.addEventListener('click', (arg) => {
    closeModal();
});

window.addEventListener('click', (arg) => {
    if (arg.target == modal) {
        closeModal();
    }
});
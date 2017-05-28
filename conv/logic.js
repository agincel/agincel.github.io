

var result = [];

function load() {
    typeChanged();

    document.getElementById("conv").classList.add("hidden");
}

function typeChanged() {
    var type = document.getElementById("type").value;
    
    var plainFields = document.getElementsByClassName("plainField");
    var yesnoFields = document.getElementsByClassName("yesnoField");
    if (type == "plain") {
        for (var i = 0; i < plainFields.length; i++) {
            plainFields[i].classList.remove("hidden");
        }
        for (var i = 0; i < yesnoFields.length; i++) {
            yesnoFields[i].classList.add("hidden");
        }

    } else if (type == "yesno") {
        for (var i = 0; i < plainFields.length; i++) {
            plainFields[i].classList.add("hidden");
        }
        for (var i = 0; i < yesnoFields.length; i++) {
            yesnoFields[i].classList.remove("hidden");
        }
    }
}

function confirmMetadata() {
    var metadata = {};
    metadata.type = document.getElementById("type").value;
    
    if (metadata.type == "plain") {
        metadata.endScript = document.getElementById("endScript").value;
    } else if (metadata.type == "yesno") {
        metadata.yesPath = document.getElementById("yesPath").value;
        metadata.noPath = document.getElementById("noPath").value;
    }

    result.push(metadata);
    document.getElementById("result").innerText = JSON.stringify(result);

    document.getElementById("meta").classList.add("hidden");
    document.getElementById("conv").classList.remove("hidden");
}

function addConv() {
    var conv = {};
    conv.name = document.getElementById("name").value;
    conv.portraitType = document.getElementById("portraitType").value;
    conv.portrait = document.getElementById("portrait").value;
    conv.text = document.getElementById("text").value;

    result.push(conv);
    document.getElementById("result").innerText = JSON.stringify(result);

    document.getElementById("name").value = "";
    document.getElementById("portraitType").value = "";
    document.getElementById("portrait").value = "";
    document.getElementById("text").value = "";

    document.getElementById("dl").classList.remove("hidden");

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
    var dlAnchorElem = document.getElementById('dl');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "conversation.json");
}

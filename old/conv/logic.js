

var result = [];

function load() {
    typeChanged();

    document.getElementById("conv").classList.add("hidden");
}

function typeChanged() {
    var type = document.getElementById("type").value;
    
    var plainFields = document.getElementsByClassName("plainField");
    var yesnoFields = document.getElementsByClassName("yesnoField");
    var choiceFields = document.getElementsByClassName("choiceField");
    if (type == "plain") {
        for (var i = 0; i < plainFields.length; i++) {
            plainFields[i].classList.remove("hidden");
        }
        for (var i = 0; i < yesnoFields.length; i++) {
            yesnoFields[i].classList.add("hidden");
        }
        for (var i = 0; i < choiceFields.length; i++) {
            choiceFields[i].classList.add("hidden");
        }

    } else if (type == "yesno") {
        for (var i = 0; i < plainFields.length; i++) {
            plainFields[i].classList.add("hidden");
        }
        for (var i = 0; i < yesnoFields.length; i++) {
            yesnoFields[i].classList.remove("hidden");
        }
        for (var i = 0; i < choiceFields.length; i++) {
            choiceFields[i].classList.add("hidden");
        }
    } else if (type == "choice") {
        for (var i = 0; i < plainFields.length; i++) {
            plainFields[i].classList.add("hidden");
        }
        for (var i = 0; i < yesnoFields.length; i++) {
            yesnoFields[i].classList.add("hidden");
        }
        for (var i = 0; i < choiceFields.length; i++) {
            choiceFields[i].classList.remove("hidden");
        }
    }
}

function confirmMetadata() {
    var metadata = {};
    metadata.type = document.getElementById("type").value;
    metadata.textWait = document.getElementById("textWait").value;
    
    if (metadata.type == "plain") {
        metadata.endScript = document.getElementById("endScript").value;
        metadata.endFile = document.getElementById("endFile").value;
    } else if (metadata.type == "yesno") {
        metadata.yesFile = document.getElementById("yesFile").value;
        metadata.yesScript = document.getElementById("yesScript").value;
        metadata.noFile = document.getElementById("noFile").value;
        metadata.noScript = document.getElementById("noScript").value;
    } else if (metadata.type == "choice") {
        metadata.choices = [document.getElementById("choice1").value, document.getElementById("choice2").value, document.getElementById("choice3").value, document.getElementById("choice4").value];
        metadata.choiceFiles = [document.getElementById("choice1file").value, document.getElementById("choice2file").value, document.getElementById("choice3file").value, document.getElementById("choice4file").value];
        metadata.choiceScripts = [document.getElementById("choice1script").value, document.getElementById("choice2script").value, document.getElementById("choice3script").value, document.getElementById("choice4script").value];
    }

    result.push(metadata);
    document.getElementById("result").innerText = JSON.stringify(result);

    document.getElementById("meta").classList.add("hidden");
    document.getElementById("portrait").value = "-1";
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
    document.getElementById("portrait").value = "-1";
    document.getElementById("text").value = "";

    document.getElementById("dl").classList.remove("hidden");

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(result));
    var dlAnchorElem = document.getElementById('dl');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "conversation.json");
}

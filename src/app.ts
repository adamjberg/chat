const messages = ["this is first message", "here is a second", "and another\nwith multiple lines"];

function Message(props: { body: string }) {
    const el = Div({
        class: "message"
    });

    el.innerText = props.body;

    return el;
}

function MessageList() {
    const el = Div({
        class: "textbox"
    });

    for (const message of messages) {
        el.appendChild(Message({ body: message }));
    }

    return el;
}

function Div(attributes: { id?: string, class?: string } = {}) {
    const div = document.createElement("div");

    for (const attribute in attributes) {
        div.setAttribute(attribute, attributes[attribute]);
    }

    return div;
}

function Input() {
    return document.createElement("input");
}

function TextBox() {
    const el = Div({
        class: "textbox"
    });

    el.appendChild(Input());

    return el;
}

const root = document.getElementById("root");

root.appendChild(MessageList());
root.appendChild(TextBox())
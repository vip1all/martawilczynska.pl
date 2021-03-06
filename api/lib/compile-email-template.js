const fs = require("fs");
const path = require("path");

const TEMPLATES = {
  NEW_MESSAGE: fs.readFileSync(path.join(__dirname, "assets/new-message.template.html"), { encoding: "utf8" }),
  MESSAGE_RECEIVED: {
    en: fs.readFileSync(path.join(__dirname, "assets/message-received.en.template.html"), { encoding: "utf8" }),
    pl: fs.readFileSync(path.join(__dirname, "assets/message-received.pl.template.html"), { encoding: "utf8" })
  }
};

function compileEmailTemplate(opts, template = TEMPLATES.NEW_MESSAGE) {
  if (typeof opts !== "object") opts = {};
  let message = template;
  Object.keys(opts).forEach(key => {
    message = message.replace(new RegExp(`{${key}}`, "g"), opts[key]);
  });
  return message;
}

compileEmailTemplate.TEMPLATES = TEMPLATES;

module.exports = compileEmailTemplate;

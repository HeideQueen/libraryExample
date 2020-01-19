(function(global, $) {
  const Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  const supportedLangs = ['en', 'es'];

  const greetings = {
    en: 'Hello ',
    es: 'Hola '
  };

  const formalGreetings = {
    en: 'Greetings ',
    es: 'Saludos '
  };

  const logMessages = {
    en: 'logged in',
    es: 'inició sesión'
  };

  Greetr.prototype = {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    validate: function() {
      if (!supportedLangs.includes(this.language)) {
        throw 'this language is not supported';
      }
    },
    greeting: function() {
      return greetings[this.language] + this.firstName + '!';
    },
    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    greet: function(formal) {
      this.validate();
      let msg;
      formal ? (msg = this.formalGreeting()) : (msg = this.greeting());
      if (console) console.log(msg);
      return this;
    },
    log: function() {
      if (console)
        console.log(logMessages[this.language] + ': ' + this.fullName());
      return this;
    },
    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    login: function(html, formal) {
      if (!$) throw 'needs more jQuery';
      if (!html) throw 'need valid selector';
      let msg;
      formal ? (msg = this.formalGreeting()) : (msg = this.greeting());
      html.text(msg);
      return this;
    }
  };

  Greetr.init = function(
    firstName = 'Heide',
    lastName = 'Queen',
    language = 'en'
  ) {
    const self = this;
    self.firstName = firstName;
    self.lastName = lastName;
    self.language = language;
    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, $);

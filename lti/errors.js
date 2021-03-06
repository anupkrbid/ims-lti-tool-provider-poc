class ConsumerError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class ExtensionError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class StoreError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class ParameterError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class SignatureError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class NonceError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}
class OutcomeResponseError extends Error {
  constructor(message) {
    super(...arguments);
    this.message = message;
  }
}

module.exports = {
  ConsumerError,
  ExtensionError,
  StoreError,
  ParameterError,
  SignatureError,
  NonceError,
  OutcomeResponseError
};

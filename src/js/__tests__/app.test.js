import Validator from "../app";

test("Валидация пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("JOE");
  expect(received).toBe(true);
});

test("Валидация пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("JO");
  expect(received).toBe(true);
});

test("Валидация не пройдена", () => {
  const validator = new Validator();
  const received = validator.validateUsername("#8)");
  expect(received).toBe(false);
});

test("Начинается с цифры", () => {
  const validator = new Validator();
  const received = validator.validateUsername("777JOE");
  expect(received).toBe(false);
});

test("Заканчивается цифрой", () => {
  const validator = new Validator();
  const received = validator.validateUsername("JOE777");
  expect(received).toBe(false);
});

test("Не более трех цифр подряд", () => {
  const validator = new Validator();
  const received = validator.validateUsername("O0-00-0O");
  expect(received).toBe(true);
});

test("Более трех цифр подряд", () => {
  const validator = new Validator();
  const received = validator.validateUsername("O000-0O");
  expect(received).toBe(true);
});

test("Кириллица", () => {
  const validator = new Validator();
  const received = validator.validateUsername("ОЛЕГ");
  expect(received).toBe(false);
});

test("Начинается с тире", () => {
  const validator = new Validator();
  const received = validator.validateUsername("-JOE");
  expect(received).toBe(false);
});

test("Заканчивается подчеркиванием", () => {
  const validator = new Validator();
  const received = validator.validateUsername("JOE_");
  expect(received).toBe(false);
});

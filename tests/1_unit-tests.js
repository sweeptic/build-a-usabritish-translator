const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/Translator.js');
let translator;

suite('Unit Tests', () => {
  beforeEach(() => {
    translator = new Translator();
  });

  test('Translate Mangoes are my favorite fruit. to British English ', () => {
    const result = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'Mangoes are my favorite fruit.');
    assert.strictEqual(result.translation, 'Mangoes are my favourite fruit.');
  });

  test('Translate I ate yogurt for breakfast. to British English', () => {
    const result = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'I ate yogurt for breakfast.');
    assert.strictEqual(result.translation, 'I ate yoghurt for breakfast.');
  });

  test("Translate We had a party at my friend's condo. to British English", () => {
    const result = translator.translate("We had a party at my friend's condo.", 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, "We had a party at my friend's condo.");
    assert.strictEqual(result.translation, "We had a party at my friend's flat.");
  });

  test('Translate Can you toss this in the trashcan for me? to British English', () => {
    const result = translator.translate('Can you toss this in the trashcan for me?', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'Can you toss this in the trashcan for me?');
    assert.strictEqual(result.translation, 'Can you toss this in the bin for me?');
  });

  test('Translate The parking lot was full. to British English', () => {
    const result = translator.translate('The parking lot was full.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'The parking lot was full.');
    assert.strictEqual(result.translation, 'The car park was full.');
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
    const result = translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'Like a high tech Rube Goldberg machine.');
    assert.strictEqual(result.translation, 'Like a high tech Heath Robinson device.');
  });

  test('Translate To play hooky means to skip class or work. to British English', () => {
    const result = translator.translate('To play hooky means to skip class or work.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'To play hooky means to skip class or work.');
    assert.strictEqual(result.translation, 'To bunk off means to skip class or work.');
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', () => {
    const result = translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'No Mr. Bond, I expect you to die.');
    assert.strictEqual(result.translation, 'No Mr Bond, I expect you to die.');
  });

  test('Translate Dr. Grosh will see you now. to British English', () => {
    const result = translator.translate('Dr. Grosh will see you now.', 'american-to-british');
    assert.isObject(result);
    assert.property(result, 'text', 'result should have text property');
    assert.property(result, 'translation', 'result should have translation property');
    assert.strictEqual(result.text, 'Dr. Grosh will see you now.');
    assert.strictEqual(result.translation, 'Dr Grosh will see you now.');
  });

  // test('Translate Lunch is at 12:15 today. to British English', () => {
  //   const result = translator.translate('Lunch is at 12:15 today.', 'american-to-british');
  //   assert.isObject(result);
  //   assert.property(result, 'text', 'result should have text property');
  //   assert.property(result, 'translation', 'result should have translation property');
  //   assert.strictEqual(result.text, 'Lunch is at 12:15 today.');
  //   assert.strictEqual(result.translation, 'Lunch is at 12.15 today.');
  // });
});

/*

*Translate Mangoes are my favorite fruit. to British English
*Translate I ate yogurt for breakfast. to British English
*Translate We had a party at my friend's condo. to British English
*Translate Can you toss this in the trashcan for me? to British English
*Translate The parking lot was full. to British English
*Translate Like a high tech Rube Goldberg machine. to British English
*Translate To play hooky means to skip class or work. to British English
*Translate No Mr. Bond, I expect you to die. to British English
*Translate Dr. Grosh will see you now. to British English
*Translate Lunch is at 12:15 today. to British English
*/

test('Translate We watched the footie match for a while. to American English', () => {
  const result = translator.translate('We watched the footie match for a while.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'We watched the footie match for a while.');
  assert.strictEqual(result.translation, 'We watched the soccer match for a while.');
});

test('Translate Paracetamol takes up to an hour to work. to American English', () => {
  const result = translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'Paracetamol takes up to an hour to work.');
  assert.strictEqual(result.translation, 'Tylenol takes up to an hour to work.');
});

test('Translate First, caramelise the onions. to American English', () => {
  const result = translator.translate('First, caramelise the onions.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'First, caramelise the onions.');
  assert.strictEqual(result.translation, 'First, caramelize the onions.');
});

test('Translate I spent the bank holiday at the funfair. to American English', () => {
  const result = translator.translate('I spent the bank holiday at the funfair.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'I spent the bank holiday at the funfair.');
  assert.strictEqual(result.translation, 'I spent the public holiday at the carnival.');
});

test('Translate I had a bicky then went to the chippy. to American English', () => {
  const result = translator.translate('I had a bicky then went to the chippy.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'I had a bicky then went to the chippy.');
  assert.strictEqual(result.translation, 'I had a cookie then went to the fish-and-chip shop.');
});

test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
  const result = translator.translate("I've just got bits and bobs in my bum bag.", 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, "I've just got bits and bobs in my bum bag.");
  assert.strictEqual(result.translation, "I've just got odds and ends in my fanny pack.");
});

test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
  const result = translator.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'The car boot sale at Boxted Airfield was called off.');
  assert.strictEqual(result.translation, 'The swap meet at Boxted Airfield was called off.');
});

test('Translate Have you met Mrs Kalyani? to American English', () => {
  const result = translator.translate('Have you met Mrs Kalyani?', 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, 'Have you met Mrs Kalyani?');
  assert.strictEqual(result.translation, 'Have you met Mrs. Kalyani?');
});

test("Translate Prof Joyner of King's College, London. to American English", () => {
  const result = translator.translate("Prof Joyner of King's College, London.", 'british-to-american');
  assert.isObject(result);
  assert.property(result, 'text', 'result should have text property');
  assert.property(result, 'translation', 'result should have translation property');
  assert.strictEqual(result.text, "Prof Joyner of King's College, London.");
  assert.strictEqual(result.translation, "Prof. Joyner of King's College, London.");
});

// test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
//   const result = translator.translate('Tea time is usually around 4 or 4.30.', 'british-to-american');
//   assert.isObject(result);
//   assert.property(result, 'text', 'result should have text property');
//   assert.property(result, 'translation', 'result should have translation property');
//   assert.strictEqual(result.text, 'Tea time is usually around 4 or 4.30.');
//   assert.strictEqual(result.translation, 'Tea time is usually around 4 or 4:30.');
// });
/*
Translate We watched the footie match for a while. to American English
*Translate Paracetamol takes up to an hour to work. to American English
*Translate First, caramelise the onions. to American English
*Translate I spent the bank holiday at the funfair. to American English
*Translate I had a bicky then went to the chippy. to American English
*Translate I've just got bits and bobs in my bum bag. to American English
*Translate The car boot sale at Boxted Airfield was called off. to American English
*Translate Have you met Mrs Kalyani? to American English
*Translate Prof Joyner of King's College, London. to American English
*Translate Tea time is usually around 4 or 4.30. to American English


Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.

*/

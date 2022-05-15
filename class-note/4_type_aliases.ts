//! type보다 interface를 쓰도록~
//! type은 확장이 되지 않음

type typedPerson = {
  name: string,
  age: number
}

interface interfacePerson {
  name: string,
  age: number
}

let soso: typedPerson = {
  name: 'soso',
  age: 66
}

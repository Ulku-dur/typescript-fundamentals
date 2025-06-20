npm run buil dist dosyası oluşturur, bu da yayınlamadan önce yapılır, dosyaları minimize eder.
yazdığımız .ts uzantılı dosyayı main.ts de import etmeliyiz.
Ts zaten Type Inference özelliğine sahip ama yine de hataya mahal vermemek için tipini belirtmekte çokça fayda var. dist de deploy ederken hata verebilir yoksa.

Union type, bir değişkenin birden fazla farklı türde veri tutmasına izin verir.
let değişkenAdı: tür1 | tür2;
let tax: number | string;

tax = 100;       // ✅ geçerli (number)
tax = "$10";     // ✅ geçerli (string)
tax = true;      // ❌ geçersiz (boolean değil)

any, değişkenin tür denetimini devre dışı bırakır. JavaScript'teki gibi her türlü değer atanabilir.

let notSure: any;

notSure = 4;
notSure = "hello";
notSure = false;
notSure = () => console.log("function");

?. (optional chaining)	undefined olasılığına karşı güvenli kullanım sağlar

const mixed: (string | number)[] = ["apple", 10, "banana", 20];

 Array of Objects (Nesne dizisi)
 type Book = {
  title: string;
  year: number;
};

const books: Book[] = [
  { title: "1984", year: 1949 },
  { title: "Brave New World", year: 1932 },
];

Ts de arrayin tipini belirtmek zorundayız.
let values = []; // TS bunu: never[] olarak yorumlar!
values.push("text"); // ❌ HATA!

 TypeScript’te Object Tanımı

let car: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2020
};

Dizi İçinde Nesneler

let items: { title: string; cost?: number }[] = [
  { title: "book", cost: 20 },
  { title: "pen", cost: 10 },
  { title: "notebook" } // cost opsiyonel olduğu için hata vermez
];

let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2020
};

car.brand = 'ford'; // ✅ Bu geçerli çünkü brand değiştirilebilir
car.year = 2023;     // ✅ Bu da geçerli

let car: { readonly brand: string; year: number } = {
  brand: 'toyota',
  year: 2020
};

car.brand = 'ford'; // ❌ HATA: Çünkü brand artık readonly

<!-- obj paramater -->

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course, ${student.name.toUpperCase()}`);
}

const newStudent = { id: 5, name: "Anna" };
createStudent(newStudent);

createStudent({ id: 1, name: "Bob", email: "bob@gmail.com" }); // ❌ Error

const student = { id: 1, name: "Bob", email: "bob@gmail.com" };
createStudent(student); // ✅ 









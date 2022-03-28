import faker from "@faker-js/faker";

class FakeDataClient {

    generateAddressInfo() {
        return {
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            day: faker.datatype.number({ min: 1, max: 28 }).toString(),
            month: faker.date.month(),
            year: faker.datatype.number({ min: 1950, max: 2000 }).toString(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode("#####"),
            phoneNumber: faker.phone.phoneNumber('###-###-###')
        }
    }

    generateEmail() {
        return faker.internet.email();
    }

    generateAlphaNumericName() {
        return faker.random.alphaNumeric(8);
    }
}

export default new FakeDataClient();
/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
// Create a class called tenancy agreement.
const tenancyAgreement = {
  startDate: new Date(2024, 6, 2),
  endDate: new Date(2025, 5, 1),
  deposit: 1211.53,
  rent: 1125.0,
  toBePaidInAdvanceOnThe: 2,
  term: 12,
  annualAmount: 0,
  calculateAnnualAmount: function (rent, term) {
    this.annualAmount = rent * term;
  },
  leadNominatedTenant: "Ms M G E",
  agent: "Brent Barrett Ltd",
  landLordEmail: "management.dulwich@winkworth.co.uk",
  landlordTelephoneNumber: "020 8299 9179",
};
tenancyAgreement.calculateAnnualAmount(
  tenancyAgreement.rent,
  tenancyAgreement.term
);

console.log(tenancyAgreement);

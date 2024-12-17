describe('automation exercise', () => {
  it('Verify Subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.get('.single-widget > h2').contains("Subscription")
    cy.get('#susbscribe_email').type("gvantsa@gmail.com")
    cy.get('#subscribe').click()
    cy.get('.alert-success').should("contain", "You have been successfully subscribed!")
  })

  it('Add Products in Cart', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#product-1 > .cart_description > h4 > a').should("contain", "Blue Top")
    cy.get('#product-2 > .cart_description > h4 > a').should("contain", "Men Tshirt")
    cy.get('#product-1 > .cart_price > p').should("contain", "Rs. 500")
    cy.get('#product-2 > .cart_price > p').should("contain", "Rs. 400")
    cy.get('#product-1 > .cart_quantity > .disabled').should("contain", 1)
    cy.get('#product-2 > .cart_quantity > .disabled').should("contain", 1)
    cy.get('#product-1 > .cart_total > .cart_total_price').should("contain", "Rs. 500")
    cy.get('#product-2 > .cart_total > .cart_total_price').should("contain", "Rs. 400")
  })


  
  it('Place Order: Login before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.contains(
      "Full-Fledged practice website for Automation Engineers"
    ).should("be.visible");
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type("test@zaza20.com")
    cy.get('[data-qa="login-password"]').type("123456")
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should("contain", "zaza")
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.contains("Shopping Cart").should("be.visible")
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery > .address_firstname').should("contain", "Mrs. test test")
    cy.get('#address_delivery > :nth-child(3)').should("contain", "test")
    cy.get('#address_delivery > :nth-child(4)').should("contain", "test")
    cy.get('#address_delivery > :nth-child(5)').should("contain", "test")
    cy.get('#address_delivery > .address_city').should("contain", "test test",
								1234)
    cy.get('#address_delivery > .address_country_name').should("contain", "Canada")
    cy.get('#address_delivery > .address_phone').should("contain", 453453553)
    cy.get('.form-control').type("test")
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type("gvantsa")
    cy.get('[data-qa="card-number"]').type(463635463)
    cy.get('[data-qa="cvc"]').type(231)
    cy.get('[data-qa="expiry-month"]').type(11)
    cy.get('[data-qa="expiry-year"]').type(2026)
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.col-sm-9 > p').should("contain", "Congratulations! Your order has been confirmed!")
  })
})
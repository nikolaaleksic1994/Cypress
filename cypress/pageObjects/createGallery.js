class CreateGallery{
    get titleInput() {
        return cy.get("input[id='title']")
    }

    get descriptionInput() {
        return cy.get("input[id='description']")
    }

    get image() {
        return cy.get('.input-group.mb-3 > .form-control')
    }


    get submitButton() {
        return cy.get('form > button:nth-of-type(1)')
    }

    get createButton() {
        return cy.get("a[href='/create']")
    }

    clickCreateButton() {
        this.createButton.click()
    }

    create(title, description, image){
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.image.type(image)
        this.submitButton.click()
    }
}

export const createGallery = new CreateGallery()
import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Please register/update book
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="book-title">Title</Label>
                            <Input
                                type="text"
                                id="book-title"
                                name="name"
                                value={this.state.activeItem.name}
                                onChange={this.handleChange}
                                placeholder="Enter book title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="book-category">Category</Label>
                            <Input
                                type="text"
                                id="book-category"
                                name="category"
                                value={this.state.activeItem.category}
                                onChange={this.handleChange}
                                placeholder="Enter book category"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="book-author">Author</Label>
                            <Input
                                type="text"
                                id="book-author"
                                name="author"
                                value={this.state.activeItem.author}
                                onChange={this.handleChange}
                                placeholder="Author's name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="publication-date">Published Date</Label>
                            <Input
                                type="date"
                                id="publication-date"
                                name="publication_date"
                                value={this.state.activeItem.publicationDate}
                                onChange={this.handleChange}
                                placeholder="Enter publication date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="number-pages">Number of pages</Label>
                            <Input
                                type="number"
                                id="number-pages"
                                name="number_pages"
                                value={this.state.activeItem.numberOfPages}
                                onChange={this.handleChange}
                                placeholder="Enter the book's number of pages"
                            />
                        </FormGroup>
                        {/* <FormGroup check>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

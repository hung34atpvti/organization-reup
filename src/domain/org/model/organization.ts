import { model, Model, Document, Schema } from 'mongoose';

export class OrganizationDocument extends Document {
    name: string;
    description: string;
    address: string;
}

const organizationSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    description: String,
    address:   String
});

const Organization: Model<OrganizationDocument> = model<OrganizationDocument, Model<OrganizationDocument>>('Organization', organizationSchema);

export default Organization;
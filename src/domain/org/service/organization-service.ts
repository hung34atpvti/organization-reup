import Organization, { OrganizationDocument } from "../model/organization";

class OrganizationService {
    public async findAll(): Promise<OrganizationDocument[]> {
        return Organization.find();
    }

    public async findById(id: string): Promise<OrganizationDocument> {
        return Organization.findById(id);
    }

    public async create(reqOrg: OrganizationDocument) {
        const organization = await new Organization(reqOrg);
        return organization.save();
    }

    public async update(reqId: string, reqOrg: OrganizationDocument): Promise<OrganizationDocument> {
        return Organization.findByIdAndUpdate(reqId, reqOrg);
    }

    public async delete(reqId: string): Promise<OrganizationDocument> {
        return Organization.findByIdAndDelete(reqId);
    }
}

export default new OrganizationService();
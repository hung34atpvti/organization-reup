import {RequestHandler} from "express";
import OrganizationService from "../service/organization-service";
import {OrganizationDocument} from "../model/organization";
import {Body, Delete, Example, Get, Patch, Post, Route, Controller, Path} from 'tsoa';

@Route('/org')
export class OrganizationController extends Controller {
    @Get('{orgId}')
    public async getById(@Path('orgId') orgId: string): Promise<OrganizationDocument> {
        return await OrganizationService.findById(orgId);
    }

    @Get('/')
    public async getAll(): Promise<OrganizationDocument[]> {
        return await OrganizationService.findAll();
    }

    @Post('/')
    public async create(@Body() organizationReq: OrganizationDocument): Promise<OrganizationDocument> {
        return await OrganizationService.create(organizationReq);
    }

    @Post('{orgId}')
    public async update(@Path('orgId') orgId: string, @Body() organizationReq: OrganizationDocument): Promise<OrganizationDocument> {
        return await OrganizationService.update(orgId, organizationReq);
    }

    @Delete('{orgId}')
    public async remove(@Path('orgId') orgId: string): Promise<OrganizationDocument> {
        return await OrganizationService.delete(orgId);
    }
}

// export const findAll: RequestHandler = async (req, res, next) => {
//     try {
//         res.send(await OrganizationService.findAll());
//     } catch (e) {
//         next();
//     }
// }
//
// export const findById: RequestHandler = async (req, res, next) => {
//     try {
//         const orgId: string = req?.params?.id;
//         res.send(await OrganizationService.findById(orgId));
//     } catch (e) {
//         next();
//     }
// }
//
// export const create: RequestHandler = async (req, res, next) => {
//     try {
//         const organizationReq = {
//             name: req?.body?.name,
//             description: req?.body?.description,
//             address: req?.body?.address,
//         } as OrganizationDocument
//         res.send(await OrganizationService.create(organizationReq));
//     } catch (e) {
//         next();
//     }
// }
//
// export const update: RequestHandler = async (req, res, next) => {
//     try {
//         const orgId: string = req?.params?.id;
//         const organizationReq = {
//             name: req?.body?.name,
//             description: req?.body?.description,
//             address: req?.body?.address,
//         } as OrganizationDocument
//         res.send(await OrganizationService.update(orgId, organizationReq));
//     } catch (e) {
//         next();
//     }
// }
//
// export const remove: RequestHandler = async (req, res, next) => {
//     try {
//         const orgId: string = req?.params?.id;
//         res.send(await OrganizationService.delete(orgId));
//     } catch (e) {
//         next();
//     }
// }

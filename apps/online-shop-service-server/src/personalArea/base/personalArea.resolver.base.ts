/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PersonalArea } from "./PersonalArea";
import { PersonalAreaCountArgs } from "./PersonalAreaCountArgs";
import { PersonalAreaFindManyArgs } from "./PersonalAreaFindManyArgs";
import { PersonalAreaFindUniqueArgs } from "./PersonalAreaFindUniqueArgs";
import { DeletePersonalAreaArgs } from "./DeletePersonalAreaArgs";
import { PersonalAreaService } from "../personalArea.service";
@graphql.Resolver(() => PersonalArea)
export class PersonalAreaResolverBase {
  constructor(protected readonly service: PersonalAreaService) {}

  async _personalAreasMeta(
    @graphql.Args() args: PersonalAreaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PersonalArea])
  async personalAreas(
    @graphql.Args() args: PersonalAreaFindManyArgs
  ): Promise<PersonalArea[]> {
    return this.service.personalAreas(args);
  }

  @graphql.Query(() => PersonalArea, { nullable: true })
  async personalArea(
    @graphql.Args() args: PersonalAreaFindUniqueArgs
  ): Promise<PersonalArea | null> {
    const result = await this.service.personalArea(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PersonalArea)
  async deletePersonalArea(
    @graphql.Args() args: DeletePersonalAreaArgs
  ): Promise<PersonalArea | null> {
    try {
      return await this.service.deletePersonalArea(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

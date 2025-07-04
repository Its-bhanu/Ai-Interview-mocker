import { pgTable ,serial,varchar,text} from "drizzle-orm/pg-core";

export const mockInterview = pgTable("mockInterview", {

    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    mockId:varchar('mockId').notNull(),
})

export const UserAnswer = pgTable("userAnswer", {
    id:serial('id').primaryKey(),
    mockRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns').notNull(),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail').notNull(),
    // createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
});
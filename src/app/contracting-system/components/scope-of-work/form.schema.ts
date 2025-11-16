import {
  schema,
  applyWhen,
  required,
  applyEach,
  SchemaPathTree,
} from '@angular/forms/signals';
import {
  ScopeOfWorkDeliverable,
  ScopeOfWorkFormModel,
} from '../../pages/contract-form/contract-form.component';

const scopeOfWorkDeliverableSchema = schema<ScopeOfWorkDeliverable>(
  (path: SchemaPathTree<ScopeOfWorkDeliverable>) => {
    //required(path.name);
    required(path.description, {
      when: (ctx) => ctx.valueOf<string>(path.name).length > 0,
    });
  },
);

export const scopeOfWorkSchema = schema<ScopeOfWorkFormModel>(
  (path: SchemaPathTree<ScopeOfWorkFormModel>) => {
    required(path.scopeDescription);
    applyEach(path.deliverables, scopeOfWorkDeliverableSchema);
  },
);

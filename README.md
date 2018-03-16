# @fairen/seed-crud-service

A basic and generic Angular Service

## Usage

> Extend your CRUD service from `CrudService` with the corresponding type :

```typescript
import { CrudService } from 'app/shared/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'app/shared/models/todo';

@Injectable()
export class TodoService extends CrudService<Todo> {

  constructor(_http: HttpClient) {
    super(_http, '/api/todos');
  }
  
  ...
}
```

## Test 
```sh
npm run ci:test
```

## Lint 
```sh
npm run ci:lint
```
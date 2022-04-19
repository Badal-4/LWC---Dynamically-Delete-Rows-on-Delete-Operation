 deleteTaskFromList(event)
    {
        let idToDelete = event.target.name;
        let itemList = Object.assign([], this.itemsList);
        let TaskIndex;
        let recordIdToDelete;
       
        this.processing = true;
      
        for(let i=0; i<itemList.length; i++) {
            if(idToDelete === itemList[i].Id) {
                TaskIndex = i;
                this.index = TaskIndex;
            }
        }

        recordIdToDelete = itemList[TaskIndex].Id;
        console.log('RecordId -->'+recordIdToDelete);
        deleteItems({ recordId: recordIdToDelete })
        .then(result => {
            if(result) {
            itemList.splice(TaskIndex, 1);
            console.log('Item List'+itemList); 
            } else {
                console.log('Unable to delete task');
            }
            this.itemsList = itemList;
        })
        .catch(error => console.log('Delete Error-->'+error))
        .finally(() => this.processing = false);
    }

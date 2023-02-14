  sql = "SELECT %s from borrowers WHERE borrowerid = %s;"
fieldIDToUpdate= int (fieldIDToUpdate) -1
BorrowerIDtoUpdate = int (BorrowerIDtoUpdate)

FieldNameToUpdate = DicColumn.get(fieldIDToUpdate)
            
            para = (FieldNameToUpdate,BorrowerIDtoUpdate)
            
            cur.execute(sql,para)
            
            dbOutput = cur.fetchall()
            print (BorrowerIDtoUpdate)
            print (FieldNameToUpdate)
            print (dbOutput)

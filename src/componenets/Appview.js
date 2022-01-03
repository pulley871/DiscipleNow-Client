import { Route, Routes } from "react-router-dom"
import { DiscipleHome } from "../RegularDisciple/DiscipleHome"
import { DiscipleMessages } from "../RegularDisciple/DiscipleMessages"
import { AddDisciple } from "./Group/AddDisciple"
import { SelectedDisciple } from "./LeadDisciple/DiscipleView"
import { LeadDiscipleHome } from "./LeadDisciple/LeadDiscipleHome"
import { LeadJournal } from "./LeadDisciple/LeadJournal"
import { Messages } from "./Messages/Messages"

export const ApplicationView = () => {
    return(<>
        
        <Routes>
            <Route exact path="/leadhome" element={<LeadDiscipleHome/>}/>
            <Route exact path="/lead/selecteddisciple/:discipleId" element={<SelectedDisciple/>}/>
            <Route exact path="/lead/journal" element={<LeadJournal />}/>
            <Route exact path="/lead/adddisciple" element={<AddDisciple/>}/>
            <Route exact path="/lead/messages" element={<Messages/>}/>
            
        </Routes>
        <Routes>
            <Route exact path="/home" element={<DiscipleHome />}/>
            <Route exact path="/messages" element={<DiscipleMessages />}/>
        </Routes>
    </>)
}
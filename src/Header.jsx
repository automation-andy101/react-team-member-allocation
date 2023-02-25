const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <header>
            <h1 className="mt-4 p5 bg-primary text-white rounded">Team Member Allocation</h1>
            <h3>{selectedTeam} has {teamMemberCount} Members</h3>
        </header>
    )
}
export default Header;


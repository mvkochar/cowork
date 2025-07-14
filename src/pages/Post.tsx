import { Link } from 'react-router-dom'
import { BlogItem, Cta } from '../components'
import BlogItemsList from '../db/BlogItemsList'
import './css/Post.css'

const Post = () => {
    return (
        <>
            <div className="post-wr">
                <div className="post-heading">
                    <p className="post-date">15 Apr</p>
                    <h1 className="h1-title text-uppercase">7 Team Collaboration Tools for Remote Teams</h1>
                </div>
                <div className="post-content d-f">
                    <div>
                        <p className="post-desc">
                            Remote work is becoming more common, with studies showing
                            over 25% of employees now work from home at least part of
                            the time. While remote work offers many advantages like
                            flexibility and increased productivity, it also presents
                            some challenges - especially when it comes to team
                            collaboration and communication.
                        </p>
                        <p className="post-text">
                            When you have team members spread across different locations,
                            it's crucial to have the right tools to keep everyone coordinated
                            and projects running smoothly. From video conferencing to file
                            sharing, the technology you use can make or break your remote
                            team's ability to work together effectively. <br />
                            To help you build that vital virtual bridge, here are
                            7 essential team collaboration tools for remote workers:
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>Video Conferencing: Zoom</h3>
                        <div><img src="/images/zoom.png" alt="Zoom" /></div>
                        <p className="post-text" style={{ marginTop: "16px" }}>
                            When you can't meet face-to-face, video conferencing is the next best thing.
                            Zoom has emerged as one of the most popular and user-friendly options.
                            In addition to HD video calls, it offers screen sharing, recording capabilities,
                            and integrations with other apps. Use it for virtual meetings, team check-ins,
                            or even virtual co-working sessions.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>Project Management: Trello</h3>
                        <div><img src="/images/trello.png" alt="Trello" /></div>
                        <p className="post-text" style={{ marginTop: "16px" }}>
                            For streamlining project management, Trello is a simple and visual tool.
                            Its card-based kanban boards allow you to create task lists, assign items
                            to team members, set due dates, attach files, and more. The ability to easily
                            see each project's status and quickly drag-and-drop tasks makes it ideal
                            for remote teams.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>
                            File Storage & Collaboration: Google Drive
                        </h3>
                        <div><img src="/images/storage.png" alt="Storage" /></div>
                        <p className="post-text" style={{ marginTop: "16px" }}>
                            Having a centralized place to store and collaborate on documents, spreadsheets,
                            and other files is vital when working remotely. Google Drive provides cloud storage
                            and its suite of productivity apps integrates real-time co-editing so multiple team
                            members can work on the same file simultaneously.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>
                            Team Communication: Slack
                        </h3>
                        <p className="post-text">
                            Efficient team communication is crucial for remote teams, which makes
                            Slack one of the most valuable collaboration tools. This messaging app
                            allows you to organize conversations into dedicated channels, share files,
                            leverage integrations with other apps, and quickly get in touch whether
                            it's for group discussions or one-on-one chats.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>
                            Work Management: Asana
                        </h3>
                        <p className="post-text">
                            Projects can easily get derailed when teams aren't properly aligned on
                            responsibilities, deadlines, and milestones. Asana is a work management
                            platform designed to solve this issue. You can create projects and tasks,
                            assign owners, set due dates, add attachments, and see projects through multiple
                            views like timeline, calendar, or kanban boards.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>
                            Video Messaging: Loom
                        </h3>
                        <p className="post-text">
                            Sometimes explaining things over video is much easier than trying to put it into words.
                            Loom is a video messaging tool that lets you record your screen, voice, and face.
                            Use it to create quick tutorials, give feedback on designs, explain complex tasks, or
                            just more personally connect with remote colleagues.
                        </p>
                        <h3 className="h3-title" style={{ marginTop: "24px", marginBottom: "16px" }}>
                            Audio Enhancement: Krisp
                        </h3>
                        <p className="post-text">
                            For remote workers without a professional recording setup, background noise
                            can be an issue on video calls. Krisp is an AI-powered app that silences ambient
                            sound and clears up audio so you always sound professional. It even has a mode
                            to remove noise from pre-recorded audio files.
                        </p>
                        <p className="post-text" style={{ marginTop: "24px" }}>
                            The right collaboration tools help remote teams work as a synced unit rather
                            than just scattered individuals. Implement a virtual toolbox like the options
                            listed above and you'll go a long way towards driving productivity and effective
                            teamwork for your remote or distributed workforce.
                        </p>
                        <p className="post-category">Productivity</p>
                    </div>
                    <div>
                        <div className="post-author d-f align-center">
                            <div><img src="/images/post-author.png" alt="post-author" /></div>
                            <div>
                                <h4 className="author-name">Jensen Turner</h4>
                                <p className="author-pos">Cowork Founder</p>
                            </div>
                        </div>
                        <p className="post-duration">7 min read</p>
                        <div className="post-stats d-f">
                            <p className="stats-item">👏 287</p>
                            <p className="stats-item">💬 90</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="post-related">
                <h4 className="post-related-above">Other Blog Posts</h4>
                <h2 className="h2-title">You May Also Like</h2>
                <div className="post-related-box d-f">
                    {
                        BlogItemsList.filter((elem)=> elem.id < 4).map((post)=> {
                            return (
                                <BlogItem
                                    key={`related-post${post.id}`}
                                    {...post}
                                />
                            )
                        })
                    }
                </div>
                <Link to="/blog" className="post-related-link">View All</Link>
            </div>
            <div className="post-cta">
                <Cta/>
            </div>
        </>
    )
}

export default Post
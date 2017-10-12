'use strict';
const Layout = require('../layouts/default.jsx');
const Package = require('../../../package.json');
const React = require('react');


class HomePage extends React.Component {
    render() {

        const neck = <link rel='stylesheet' href="/public/pages/home.min.css" />;

        return (
            <Layout
                title="Aqua"
                neck={neck}
                activeTab="home">

                <div className="jumbotron">
                    <h1>The Security Demo</h1>
                    <div>
                        <p className="lead">Your Node.js website and user system is running. (v{Package.version})</p>
                        <div>
                            <a className="btn btn-primary btn-lg" href="/signup">
                                Create an account
                            </a>
                            &nbsp; or &nbsp;
                            <a className="btn btn-warning btn-lg" href="/login/forgot">
                                Reset your password
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Learn More</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
                                </p>
                                <a href="/about" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Sign up</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
                                </p>
                                <a href="/signup" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Contact us</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
                                </p>
                                <a href="/contact" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>


         <div className="col-sm-12">
         <p>The goal of this page is to explain the connection between users, roles and groups.</p>

<h3 id="users">Users</h3>

<p>The User model was designed to facilitate the login system no matter what role is being played. After a user is authenticated you have access to the roles that user can play. User instances have the following methods:</p>

<p>The User model has a <code>isActive</code> field which the login API uses to validate credentials. It can be used as a simple way to prevent a user from logging in. It's not recommended to make it represent anything more than that.</p>

<h3 id="rolesaccountsadmins_custom_">Roles (Accounts, Admins &amp; <em>Custom</em>)</h3>

<p>There are certainly some ideas/projects that could be wildly successful and never use the Admin role in Aqua. You're not required to make use of it. However, once a system has users, we usually need a way to manage and support them.</p>

<p>There are some important differences between what Account and Admin roles were designed for. Think of Accounts as the "customers" of a system and think of Admins as the "owners" and/or "employees". Take a support ticket feature for example. Accounts would be the users that created support tickets, while Admins would be the users who could see all tickets, be assigned to them, reply to them and see reports about them.</p>

<p><strong>Why are roles separate from Users?</strong> For sanity really. Did you realize that both Admins and Accounts are indeed Users? Both of them need to login, both of them can forget their passwords and have them reset. Storing user information on both the Account and Admin schemas would complicate the login logic, forcing us to overly abstract it or even duplicate it by creating two separate login screens.</p>

<p>A common feature to add is the ability to validate Account email addresses by sending an email to the person who registered and having them click a link. This feature would only be necessary for Accounts, as Admins wouldn't need this functionality since they can't register. So putting the "validation" logic on the Account makes the most sense and keeps the functionality contained for what it's used for. Keep this in mind when you extend your system.</p>

<p><strong>Can I have more than two roles?</strong> Yes.</p>

<h4 id="thinkingaboutregistration">Thinking About Registration</h4>

<p>The registration feature that comes with Aqua won't work for our <code>Admin</code> role. As it shouldn't. Each role should be unique enough that they deserve a unique creation flow. Remember that Admins can't register. And that makes sense, we create other Admins in the backend.</p>

<h4 id="rolesvsgroups">Roles -vs- Groups</h4>

<p>Roles should be unique enough to deserve their own model. For example, if I'm a company, I could use my Admin schema to represent my employees. Then, I could add fields to my Admin schema for things like hourly rate, home address and benefits (other roles wouldn't have that type of data). Then I could use AdminGroups like departments (ex: Sales, Support, Manager). Now I can create permissions tied to AdminGroups and change the user experience based on that. Simply adding and removing a user's group memberships automatically changes their access permissions. Pretty sweet!</p>

<p><strong>Can I use groups with Accounts?</strong> Sure. Your project might benefit by extending Accounts with an AccountGroup model. For example, if I built a message board or wiki and I wanted some Accounts to moderate other Accounts or change site content... groups would be the perfect solution. It would be a huge overkill to create a new roll (and schema) for a Moderator, which is like an Account in every way, only differing by a permission.</p>

                     
                    </div>


                </div>
            </Layout>
        );
    }
}


module.exports = HomePage;

# Code comments and docstrings

A comment carries a decision, a constraint, or a consequence that the code can't show. Add a 1 to 3 line example when it makes the point faster. The comment describes the code as it is now.

Private methods get the same care as public ones. When a reader would ask "why does this exist?", the code needs a comment.

## Rejected comments, and what each one lacked

```
// Main runs the command line and returns the process exit code.
  -> narrates the signature. Delete.

# Returns true when the installation is no longer +active+, or when
# no command for the account's credential is in flight.
  -> restates a two-line method. Delete.

# Dentrix 16 has no hhitem or hhlinkpat_item table.
pytestmark = pytest.mark.dentrix_version(">=17")
  -> the marker already says it. Delete, or say what fails on 16.

"""The ``reject_counters`` trigger rolls back INSERT and DELETE, so tests
can only update the existing row"""
  -> unresolved: where does reject_counters live, and what does it guard?

def abandon
  Sync::Agent::AccountAssignment.where(sync_account_id:).destroy_all
end
  -> needs a comment. The reader asked "why delete assignments for an
     abandoned account?"
```

## Approved comments

For a race, show the events in real order. Each step is one concrete event, and the last step says what this code does about it:

```ruby
# When a ProvisioningAttempt succeeds, fails, or is abandoned, it resumes
# each installation that is in waiting_for_sync_account at that moment.
# This installation can miss that:
#
#   1. the attempt succeeds and resumes the waiting installations
#   2. this installation commits waiting_for_sync_account, too late for 1
#   3. nothing else resumes it, so it checks once here
```

For a module, define each state, say what the state doesn't mean, and show the API as code:

```ruby
# When a person or an onboarding process decides that the data source is ready for general
# use, the state changes to `ready`. This is a decision made at one point in time. It does
# not describe the current state of our connection to the EHR. For example, a data source
# can be marked `ready`, and then its sync credentials can expire a week later and make it
# unusable. Someone can then fix the credentials, and the lifecycle state does not change.
#
#   DataSource.ready              ready
#   DataSource.not_deactivated    setting_up or ready
```

Source comments follow the file's existing line width.
